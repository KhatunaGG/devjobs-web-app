import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type DataType = {
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: {
        content: string;
        items: string[];
    },
    role: {
        content: string;
        items: string[];
    }
};

export type JobCardType = {
    item: DataType;
    getFooterData?: (val: DataType) => void;
};


export type JobDetailPropsType = {
    params: string;
};

export type RequirementsPropsType = {
    itemContent: {
        content: string;
        items: string[];
    };
};

export type RoleContentPropsType = {
    roleContent: {
        content: string;
        items: string[];
    };
};


export type GlobalContextType = {
    data: DataType[];
    setData: Dispatch<SetStateAction<DataType[]>>;
    handleFilterTitle: (e: ChangeEvent<HTMLInputElement>) => void;
    titlehandleClick: (value: string) => void;
    isChacked: boolean;
    setIsCheckes: (value: boolean) => void;
    titleInputValue: string;
    setTitleInputValue: (value: string) => void;
    locatinInputValue: string;
    setLocationInputValue: (value: string) => void;
    locationHandleClick: (value: string) => void;
    handleFilterLocation: (e: ChangeEvent<HTMLInputElement>) => void;
    toggle: boolean;
    setToggle: (value: boolean) => void;
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
    isDark: boolean;
    setIsDark: (value: boolean) => void;
    getFooterData: (val: DataType) => void;
    setOverlay: (value: boolean) => void;
    overlay: boolean;
    arrLangth: number;
    setArrLength: (value: number) => void;
};

export type BgFooterPropsType = {
    jobDetaileData: DataType[];
    isDark: boolean;
};

export type ButtonPropsType = {
    isMobile?: boolean;
    text: string;
    width?: string;
};

