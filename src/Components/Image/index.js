import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '../../assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);
const Image = forwardRef(
    (
        {
            fallback: customFallback = images.noImage,
            src,
            alt,
            className,
            ...props
        },
        ref
    ) => {
        const [fallback, setFallback] = useState('');
        const handleError = () => {
            setFallback(customFallback);
        };
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    }
);

Image.propTypes = {
    fallback: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};
export default Image;
