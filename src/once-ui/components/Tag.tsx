"use client";

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import { Flex, Text, Icon } from '.';
import styles from './Tag.module.scss';

interface TagProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'brand' | 'accent' | 'warning' | 'success' | 'danger' | 'neutral' | 'info' | 'gradient';
    size?: 's' | 'm' | 'l';
    label?: string;
    prefixIcon?: string;
    suffixIcon?: string;
    children?: ReactNode;
}

const Tag = forwardRef<HTMLDivElement, TagProps>(({
    variant = 'neutral',
    size = 'm',
    label = '',
    prefixIcon,
    suffixIcon,
    className,
    children,
    ...props
}, ref) => {
    const labelSize = size === 's' ? 'label-default-s' : 'label-default-s';
    const paddingSize = size === 's' ? '2' : '4';

    return (
        <Flex
            alignItems="center"
            radius="l"
            gap="4"
            ref={ref}
            className={classNames(styles.tag, styles[variant], styles[size], className)}
            {...props}>
            {prefixIcon && <Icon name={prefixIcon} size="xs" />}
            <Flex
                paddingX={paddingSize}
                alignItems="center">
                <Text
                    as="span"
                    variant={labelSize}>
                    {label || children}
                </Text>
            </Flex>
            {suffixIcon && <Icon name={suffixIcon} size="xs" />}
        </Flex>
    );
});

Tag.displayName = "Tag";

export { Tag };
export type { TagProps };