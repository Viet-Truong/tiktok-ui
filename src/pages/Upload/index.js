import classNames from 'classnames/bind';
import styles from './Upload.module.scss';

import Button from '../../Components/Button';

import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function Upload() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-content')}>
                <div className={cx('upload')}>
                    <label htmlFor={'upload'} className={cx('upload-label')}>
                        <input
                            type='file'
                            name=''
                            id='upload'
                            className={cx('upload-input')}
                        />
                        <div className={cx('upload-description')}>
                            <FontAwesomeIcon
                                icon={faCloudArrowUp}
                                className={cx('upload-icon')}
                            />
                            <h4 className={cx('upload-title', 'mt16')}>
                                Chọn video để tải lên
                            </h4>
                            <p>Hoặc kéo và thả tập tin</p>
                            <p>
                                Có thể tách video dài thành nhiều phần để tăng
                                khả năng hiển thị
                            </p>
                            <p className={cx('mt16')}>MP4 hoặc WebM</p>
                            <p>Độ phân giải 720x1280 trở lên</p>
                            <p>Tối đa 30 phút</p>
                            <p>Nhỏ hơn 2GB</p>
                            <Button primary className={cx('btn-upload')}>
                                Chọn tập tin
                                <label htmlFor={'upload'} />
                            </Button>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Upload;
