<?php


namespace App\Form;


use App\Entity\User;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('username')
            ->add('username')
            ->add('email')
            ->add('street_number')
            ->add('street_type')
            ->add('street_name')
            ->add('postal_code')
            ->add('commune')
            ->add('username')
            ->add('Modifier', SubmitType::class);
    }




    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}