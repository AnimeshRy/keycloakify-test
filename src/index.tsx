import React from 'react';
import ReactDOM from 'react-dom/client';
import { KcApp, defaultKcProps, getKcContext } from "keycloakify";
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


const { kcContext } = getKcContext({
    "mockPageId": "register.ftl",
});


if (kcContext === undefined) {
    throw new Error(
        "This app is a Keycloak theme" +
        "It isn't meant to be deployed outside of Keycloak"
    );
}

root.render(
    <KcApp
        kcContext={kcContext}
        {...{
            ...defaultKcProps,
            "kcHeaderWrapperClass": "my-class",
            "kcFormClass": "zocial-Google",
            "kcContentClass": []
        }}
    />,
);

