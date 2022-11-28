import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCode,
    faLinkSlash,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faLine,
    faTwitter,
    faWhatsapp,
    faGoogle,
    faApple,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "Tiếng việt",
        children: {
            title: "Language",
            data: [
                {
                    type: "Language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "Language",
                    code: "vie",
                    title: "Tiếng việt",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and Help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];

export const SOCIAL_MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faCode} />,
        title: "Nhúng",
    },
    {
        icon: <FontAwesomeIcon icon={faPaperPlane} />,
        title: "Gửi đến bạn bè",
    },
    {
        icon: <FontAwesomeIcon icon={faFacebook} />,
        title: "Chia sẻ với Facebook",
    },
    {
        icon: <FontAwesomeIcon icon={faWhatsapp} />,
        title: "Chia sẻ với WhatsApp",
    },
    {
        icon: <FontAwesomeIcon icon={faLinkSlash} />,
        title: "Sao chép liên kết",
    },
    // {
    //     icon: <FontAwesomeIcon icon={faTwitter} />,
    //     title: "Chia sẻ với Twitter",
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faLinkedinIn} />,
    //     title: "Chia sẻ với LinkedIn",
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faReddit} />,
    //     title: "Chia sẻ với Reddit",
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faTelegram} />,
    //     title: "Chia sẻ với Telegram",
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faLine} />,
    //     title: "Chia sẻ với Line",
    // },
    // {
    //     icon: <FontAwesomeIcon icon={faPinterest} />,
    //     title: "Chia sẻ với Pinterest",
    // },
];

export const SOCIAL_MENU_ITEMS_LOGIN = [
    {
        icon: <FontAwesomeIcon icon={faCode} />,
        title: "Sử dụng mã QR",
    },
    {
        icon: <FontAwesomeIcon icon={faPaperPlane} />,
        title: "Email",
    },
    {
        icon: <FontAwesomeIcon icon={faFacebook} />,
        title: "Tiếp tục với Facebook",
    },
    {
        icon: <FontAwesomeIcon icon={faGoogle} />,
        title: "Tiếp tục với Google",
    },
    {
        icon: <FontAwesomeIcon icon={faTwitter} />,
        title: "Tiếp tục với Twitter",
    },
    {
        icon: <FontAwesomeIcon icon={faLine} />,
        title: "Tiếp tục với Line",
    },
    {
        icon: <FontAwesomeIcon icon={faApple} />,
        title: "Tiếp tục với Apple",
    },
    {
        icon: <FontAwesomeIcon icon={faInstagram} />,
        title: "Tiếp tục với Instagram",
    },
];
