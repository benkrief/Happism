<?php 
    class panier{
        private $DB;
        public function __construct($DB){
            if(!isset($_SESSION)){
                session_start();
            }
            if(!isset($_SESSION['panact'])){
                $_SESSION['panact'] = array();
            }
            if(!isset($_SESSION['panhot'])){
                $_SESSION['panhot'] = array();
            }
            if(!isset($_SESSION['panvol'])){
                $_SESSION['panvol'] = array();
            }
            $this->DB = $DB;
    
            if(isset($_GET['act_delPanier'])){
                $this->act_del($_GET['act_delPanier']);
            }
            if(isset($_GET['hot_delPanier'])){
                $this->hot_del($_GET['hot_delPanier']);
            }
            if(isset($_GET['vol_delPanier'])){
                $this->vol_del($_GET['vol_delPanier']);
            }
            if(isset($_POST['panact']['act_qte'])){
                $this->recalc();
            }
            if(isset($_POST['panhot']['hot_qte'])){
                $this->recalc();
            }
            if(isset($_POST['panvol']['vol_qte'])){
                $this->recalc();
            }
        }
    
    
        public function recalc(){
            foreach($_SESSION['panact'] as $act_id => $act_qte){
                if(isset($_POST['panact']['act_qte'][$act_id])){
                    $_SESSION['panact'][$act_id] = $_POST['panact']['act_qte'][$act_id];
                }
            }
            foreach($_SESSION['panhot'] as $hot_id => $hot_qte){
                if(isset($_POST['panhot']['hot_qte'][$hot_id])){
                    $_SESSION['panhot'][$hot_id] = $_POST['panhot']['hot_qte'][$hot_id];
                }
            }
            foreach($_SESSION['panvol'] as $vol_id => $vol_qte){
                if(isset($_POST['panvol']['vol_qte'][$vol_id])){
                    $_SESSION['panvol'][$vol_id] = $_POST['panvol']['vol_qte'][$vol_id];
                }
            }
        }
    
        public function count(){
            return array_sum($_SESSION['panact']).array_sum($_SESSION['panhot']).array_sum($_SESSION['panvol']);
        }
    
        public function total(){
            $total = 0;
            $total_act=0;
            $total_hot=0;
            $total_vol=0;
            $ids_act = array_keys($_SESSION['panact']);
            if(empty($ids_act)){
                $products_act = array();
            }else{
                $products_act = $this->DB->query('SELECT nact, prixact FROM activite WHERE nact IN ('.implode(',',$ids_act).')');
            }
            foreach( $products_act as $product ) {
                $total_act += $product->prixact * $_SESSION['panact'][$product->nact];
            } 
            
            $ids_hot = array_keys($_SESSION['panhot']);
            if(empty($ids_hot)){
                $products_hot = array();
            }else{
                $products_hot = $this->DB->query('SELECT nhot, prixhot FROM hotel WHERE nhot IN ('.implode(',',$ids_hot).')');
            }
            foreach( $products_hot as $product ) {
                $total_hot += $product->prixhot * $_SESSION['panhot'][$product->nhot];
            }
            $ids_vol = array_keys($_SESSION['panvol']);
            if(empty($ids_vol)){
                $products_vol = array();
            }else{
                $products_vol = $this->DB->query('SELECT nvol FROM vol WHERE nvol IN ('.implode(',',$ids_vol).')');
            }
            foreach( $products_vol as $product ) {
                $total_vol += $_SESSION['prixvol'] * $_SESSION['panvol'][$product->nvol];
            }
            $total=$total_act+$total_hot+$total_vol;
            return $total;
        }
    
        public function act_add($act_id){
            if(isset($_SESSION['panact'][$act_id])){
                $_SESSION['panact'][$act_id]++;
            }else{
                $_SESSION['panact'][$act_id] = 1;
            }
            
        }
        public function hot_add($hot_id){
            if(isset($_SESSION['panhot'][$hot_id])){
                $_SESSION['panhot'][$hot_id]++;
            }else{
                $_SESSION['panhot'][$hot_id] = 1;
            }
            
        }
        public function vol_add($vol_id){
            if(isset($_SESSION['panvol'][$vol_id])){
                $_SESSION['panvol'][$vol_id]++;
            }else{
                $_SESSION['panvol'][$vol_id] = 1;
            }
            
        }
    
        public function act_del($act_id){
            unset($_SESSION['panact'][$act_id]);
        }
        public function hot_del($hot_id){
            unset($_SESSION['panhot'][$hot_id]);
        }
        public function vol_del($vol_id){
            unset($_SESSION['panvol'][$vol_id]);
        }
    }
        


?>