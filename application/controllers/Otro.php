<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Otro extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	/*
		public function index(){
		$array['title'] ='codeigniter_reactjs';
		//$array['link'] = '';
	    $array['contenido']='<h1>esto es otro controlador prueba </h1>';
		$array['script'] ='<script src="'.site_url('public/js/bundle.js').'"></script>
						  ';

		$this->load->view('otro',$array);
	}
	*/

	public function index(){
		$this->load->database();
        $consulta = $this->db->select('*')
                             ->from('departamentos')
                             ->where('id_departamento',11,1)
                             ->get();
        if($consulta->num_rows() > 0 ){
            $row = $consulta->row();
            $array['departamento'] = $row->departamento ;
            	
        }else{
            $array['departamento'] = 'error_consulta';
		} 
		echo $array['departamento'];
	}


}
