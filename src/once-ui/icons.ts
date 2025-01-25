import { IconType } from "react-icons";

import {
    SiTypescript,
    SiJavascript
} from "react-icons/si";

import {
    HiChevronUp,
    HiChevronDown,
    HiChevronRight,
    HiChevronLeft,
    HiOutlineArrowPath,
    HiCheck,
    HiOutlineSun,
    HiOutlineMoon,
    HiMiniQuestionMarkCircle,
    HiMiniMinus,
    HiOutlineEye,
    HiOutlineEyeSlash,
    HiMiniPlus,
    HiMiniUser,
    HiMiniXMark,
    HiEyeDropper,
    HiOutlineClipboard,
    HiOutlineMagnifyingGlass,
    HiCalendar,
    HiOutlineLink,
    HiExclamationTriangle,
    HiArrowUpRight,
    HiInformationCircle,
    HiExclamationCircle,
    HiCheckCircle,
    HiOutlineShieldCheck,
    HiOutlineSparkles,
    HiOutlineDocumentText,
    HiOutlineDocument,
    HiDocument,
    HiDocumentDuplicate,
} from "react-icons/hi2";

import {
    RiVisaLine,
    RiSearch2Line,
    RiSendPlaneFill
} from "react-icons/ri";

import {
    FaDiscord,
    FaGithub,
    FaGoogle,
    FaSteam,
    FaYoutube,
    FaTelegram,
    FaCode,
    FaNpm
} from "react-icons/fa6";

import {
    VscSymbolClass,
    VscSymbolEnum,
    VscSymbolInterface,
    VscSymbolMethod,
    VscSymbolProperty,
    VscSymbolVariable,
} from "react-icons/vsc"

import { IoGridOutline, IoSend } from "react-icons/io5";

export const iconLibrary: Record<string, IconType> = {
    chevronUp: HiChevronUp,
    chevronDown: HiChevronDown,
    chevronRight: HiChevronRight,
    chevronLeft: HiChevronLeft,
    refresh: HiOutlineArrowPath,
    check: HiCheck,
    light: HiOutlineSun,
    dark: HiOutlineMoon,
    helpCircle: HiMiniQuestionMarkCircle,
    infoCircle: HiInformationCircle,
    warningTriangle: HiExclamationTriangle,
    errorCircle: HiExclamationCircle,
    checkCircle: HiCheckCircle,
    eyeDropper: HiEyeDropper,
    clipboard: HiOutlineClipboard,
    person: HiMiniUser,
    close: HiMiniXMark,
    openLink: HiOutlineLink,
    discord: FaDiscord,
    google: FaGoogle,
    github: FaGithub,
    arrowUpRight: HiArrowUpRight,
    minus: HiMiniMinus,
    plus: HiMiniPlus,
    calendar: HiCalendar,
    eye: HiOutlineEye,
    eyeOff: HiOutlineEyeSlash,
    search: HiOutlineMagnifyingGlass,
    visa: RiVisaLine,
    security: HiOutlineShieldCheck,
    sparkle: HiOutlineSparkles,
    documentText: HiOutlineDocumentText,
    document: HiOutlineDocument,
    documentAlt: HiDocument,
    documentDuplicate: HiDocumentDuplicate,
    class: VscSymbolClass,
    enum: VscSymbolEnum,
    function: VscSymbolMethod,
    interface: VscSymbolInterface,
    type: VscSymbolProperty,
    variable: VscSymbolVariable,
    search2: RiSearch2Line,
    steam: FaSteam,
    youtube: FaYoutube,
    telegram: FaTelegram,
    grid: IoGridOutline,
    code: FaCode,
    typescript: SiTypescript,
    javascript: SiJavascript,
    npm: FaNpm,
    send: RiSendPlaneFill
};
