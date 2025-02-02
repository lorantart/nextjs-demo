"use client";

import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

import { Flex, Icon, Heading } from '.';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    open?: boolean;
}

const Accordion: React.FC<AccordionProps> = forwardRef(({
    title,
    children,
    style,
    className,
    open = false
}, ref) => {
    const [isOpen, setIsOpen] = useState(open);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useImperativeHandle(ref, () => ({
        toggle: toggleAccordion,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
    }));

    return (
        <Flex
            fillWidth
            direction="column"
            style={style}
            className={className}>
            <Flex 
                style={{ borderTop: "1px solid var(--neutral-border-medium)", cursor: 'pointer' }}
                paddingY="16"
                paddingLeft="12"
                paddingRight="24"
                alignItems="center"
                justifyContent="space-between"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
                aria-controls="accordion-content">
                <Heading
                    as="h3"
                    variant="heading-strong-l">
                    {title}
                </Heading>
                <Icon
                    name="chevronDown"
                    size="m"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
            </Flex>
            {isOpen && (
                <Flex
                    id="accordion-content"
                    paddingX="12"
                    paddingBottom="32"
                    direction="column">
                    {children}
                </Flex>
            )}
        </Flex>
    );
});

Accordion.displayName = "Accordion";

export { Accordion };