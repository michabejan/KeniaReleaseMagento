<?php

namespace Kenia\Klaus\Plugin;
use Magento\Framework\Data\Tree\Node;

class TopmenuPlugin
{
    public function beforeGetHtml(
        \Magento\Theme\Block\Html\Topmenu $subject,
        $outermostClass = '',
        $childrenWrapClass = '',
        $limit = 0
    ) {
        $node = new Node(
            $this->getNodeAsArray(),
            'id',
            $subject->getMenu()->getTree(),
            $subject->getMenu()
        );

        $node2 = new Node(
            $this->getNodeAsArray2(),
            'id',
            $subject->getMenu()->getTree(),
            $subject->getMenu()
        );

        $node3 = new Node(
            $this->getNodeAsArray3(),
            'id',
            $subject->getMenu()->getTree(),
            $subject->getMenu()
        );

        $node4 = new Node(
            $this->getNodeAsArray4(),
            'id',
            $subject->getMenu()->getTree(),
            $subject->getMenu()
        );

        $node5 = new Node(
            $this->getNodeAsArray5(),
            'id',
            $subject->getMenu()->getTree(),
            $subject->getMenu()
        );

        $node6 = new Node(
            $this->getNodeAsArray6(),
            'id',
            $subject->getMenu()->getTree(),
            $subject->getMenu()
        );

        $subject->getMenu()->addChild($node);
        $subject->getMenu()->addChild($node2);
        $subject->getMenu()->addChild($node3);
        $subject->getMenu()->addChild($node4);
        $subject->getMenu()->addChild($node5);
        $subject->getMenu()->addChild($node6);
    }
    protected function getNodeAsArray()
    {
        return [
            'name' => __('Startseite'),
            'id' => 'some-unique-id-here',
            'url' => "/magento/newpage",
            'has_active' => false,
            'is_active' => ("expression to determine if menu item is selected or not")
        ];
    }
    protected function getNodeAsArray2()
    {
        return [
            'name' => __('Standorte'),
            'id' => 'some-unique-id-here2',
            'url' => "/magento/information",
            'has_active' => false,
            'is_active' => ("expression to determine if menu item is selected or not")
        ];
    }

    protected function getNodeAsArray3()
    {
        return [
            'name' => __('Nachrichten'),
            'id' => 'some-unique-id-here3',
            'url' => "/magento/news",
            'has_active' => false,
            'is_active' => ("expression to determine if menu item is selected or not")
        ];
    }

    protected function getNodeAsArray4()
    {
        return [
            'name' => __('Über uns'),
            'id' => 'some-unique-id-here4',
            'url' => "/magento/aboutus",
            'has_active' => false,
            'is_active' => ("expression to determine if menu item is selected or not")
        ];
    }

    protected function getNodeAsArray5()
    {
        return [
            'name' => __('Helfen'),
            'id' => 'some-unique-id-here5',
            'url' => "/magento/help",
            'has_active' => false,
            'is_active' => ("expression to determine if menu item is selected or not")
        ];
    }

    protected function getNodeAsArray6()
    {
        return [
            'name' => __('Spenden'),
            'id' => 'some-unique-id-here6',
            'url' => "/magento/",
            'has_active' => false,
            'is_active' => ("expression to determine if menu item is selected or not")
        ];
    }
}