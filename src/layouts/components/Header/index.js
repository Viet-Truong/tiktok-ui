import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '../../../assets/images';
import Button from '../../../Components/Button';
import Menu from '../../../Components/Popper/Menu';
import Image from '../../../Components/Image';
import Search from '../Search';
import Modal from '../../../Components/Modal';
import config from '../../../config';
import { MENU_ITEMS, userMenu } from '../../../data/menuItemData';
import { authLogout } from '../../../redux/authAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../Components/Icons';

const cx = classNames.bind(styles);

function Header() {
    const { auth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [close, setClose] = useState(true);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'logout':
                dispatch(authLogout());
                break;
            case 'profile':
                navigate(`/@${auth.nickname}`);
            default:
                break;
        }
    };

    // CLOSE MODAL
    const handleClose = () => {
        setClose(true);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt='top top' />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {auth ? (
                        <>
                            <Link
                                className={cx('upload-btn')}
                                to={config.routes.upload}
                            >
                                <UploadIcon />
                                <span>Tải lên</span>
                            </Link>
                            <Tippy
                                content='Message'
                                placement='bottom'
                                delay={[0, 20]}
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content='Inbox'
                                placement='bottom'
                                delay={[0, 20]}
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                            {/* OnChange dung de bat su kiẹn click vao dung item ma minh click  */}
                            <Menu items={userMenu} onChange={handleMenuChange}>
                                <Image
                                    className={cx('user-avatar')}
                                    src={auth.avatar}
                                    alt='Avatar'
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button text onClick={() => setClose(false)}>
                                Upload
                            </Button>
                            <Button primary onClick={() => setClose(false)}>
                                Log in
                            </Button>
                            {/* OnChange dung de bat su kiẹn click vao dung item ma minh click  */}
                            <Menu
                                items={MENU_ITEMS}
                                onChange={handleMenuChange}
                            >
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                    />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
            <Modal isClose={close} handleClose={handleClose} />
        </header>
    );
}

export default Header;
