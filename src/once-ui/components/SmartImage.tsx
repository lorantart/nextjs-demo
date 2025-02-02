import React, { CSSProperties } from 'react';
import Image, { ImageProps } from 'next/image';
import classNames from 'classnames';

import { Flex, Skeleton } from '@/once-ui/components';

type SmartImageProps = ImageProps & {
    className?: string;
    style?: React.CSSProperties;
    aspectRatio?: string;
    height?: number;
    radius?: string;
    alt?: string;
    loading?: boolean;
    objectFit?: CSSProperties['objectFit'];
};

const SmartImage: React.FC<SmartImageProps> = ({
    className,
    style,
    aspectRatio,
    height,
    radius,
    alt = '',
    loading = false,
    objectFit = 'cover',
    ...props
}) => {
    return (
        <Flex
            fillWidth
            fillHeight
            position="relative"
            background="neutral-medium"
            style={{ outline: 'none', overflow: 'hidden', ...style, aspectRatio }}
            className={classNames(className, { [`radius-${radius}`]: radius })}>
            { loading && (
                <Skeleton
                    shape="block"/>
            )}
            { !loading && (
                <Image
                    {...props}
                    alt={alt}
                    fill
                    style={{ objectFit }}/>
            )}
        </Flex>
    );
};

SmartImage.displayName = 'SmartImage';

export { SmartImage };