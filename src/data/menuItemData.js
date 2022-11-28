import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
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
