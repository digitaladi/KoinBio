<?php


namespace App\Controller\Others;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{

    /**
     * @Route("/infosite", name="info_site")
     */
    public function infoSiteAction(){
        return $this->render('index/info_site.html.twig');
    }



}