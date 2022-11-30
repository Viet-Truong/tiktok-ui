import {
    Facebook,
    Google,
    Twitter,
    Line,
    Instagram,
    Apple,
    WhatsApp,
    LinkedIn,
    Reddit,
    Telegram,
    Pinterest,
} from "../Components/Icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCode,
    faLinkSlash,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

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
        icon: <Facebook />,
        title: "Chia sẻ với Facebook",
    },
    {
        icon: <WhatsApp />,
        title: "Chia sẻ với WhatsApp",
    },
    {
        icon: <FontAwesomeIcon icon={faLinkSlash} />,
        title: "Sao chép liên kết",
    },
    // {
    //     icon: <Twitter />,
    //     title: "Chia sẻ với Twitter",
    // },
    // {
    //     icon: <LinkedIn />,
    //     title: "Chia sẻ với LinkedIn",
    // },
    // {
    //     icon: <Reddit />,
    //     title: "Chia sẻ với Reddit",
    // },
    // {
    //     icon: <Telegram />,
    //     title: "Chia sẻ với Telegram",
    // },
    // {
    //     icon: <Line />,
    //     title: "Chia sẻ với Line",
    // },
    // {
    //     icon: <Pinterest />,
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
        icon: <Facebook />,
        title: "Tiếp tục với Facebook",
        color: "#1877F2",
    },
    {
        icon: <Google />,
        title: "Tiếp tục với Google",
        color: "#4285F4",
    },
    {
        icon: <Twitter />,
        title: "Tiếp tục với Twitter",
        color: "#1DA1F2",
    },
    {
        icon: <Line />,
        title: "Tiếp tục với Line",
        color: "#00C300",
    },
    {
        icon: <Apple />,
        title: "Tiếp tục với Apple",
    },
    {
        icon: <Instagram />,
        title: "Tiếp tục với Instagram",
        color: "#E4405F",
    },
];
