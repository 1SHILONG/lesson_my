import { ComponentInternalInstance } from "vue";

export type IConfig = {
    style?: {
        opacity?: number;
    };
    props?: {
        close?: boolean;
        maskClose?: boolean;
    }
}

export interface IInstance extends ComponentInternalInstance {
    _hub: {
        t: any;
        'on-cancel': () => void;
        'on-confirm': () => void;
    }
}