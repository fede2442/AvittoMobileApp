import React, {useState} from 'react';
import * as Icon from "react-native-feather";

const Images = {
    rocketIcon: require('../Icons/rocket.png'),
    codingIcon: require('../Icons/coding.png'),
    toolkitIcon: require('../Icons/087-toolkit.png'),
    workIcon: require('../Icons/agile.png'),
    ideaIcon: require('../Icons/collaboration.png'),
    apiIcon: require('../Icons/interface.png'),
    organizeIcon: require('../Icons/ux.png'),
    scopeIcon: require('../Icons/scope.png'),
    starIcon: require('../Icons/request.png'),
    rickBackground: require('../Icons/fondo.png'),
    rickBackground2: require('../Icons/rick2.png'),
    mortyBackground: require('../Icons/morty.png'),
    mortyBackground2: require('../Icons/morty2.jpg'),
    rickBackground2i: require('../Icons/rick2invertido.png'),
    deadlineIcon: require('../Icons/deadline.png'),
    uxIcon: require('../Icons/ux.png'),
    cruz: require('../Icons/cruz.png'),
    tecladoIcon: require('../Icons/teclado.png'),
    cuentasIcon: require('../Icons/cuentas.png'),
    estudiarIcon: require('../Icons/estudiar.png'),
    fondoAzul: require('../Icons/fondo azul.png'),
};

const width_height = 40;
const strokeWidth = 1.2;

function icons(source) {
    switch(source){
        case 'anchor': return <Icon.Anchor stroke="black" width={width_height} height={width_height} strokeWidth={10} strokeWidth={strokeWidth}/>;
        case 'arrowUp': return <Icon.ArrowUp stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'arrowDown': return <Icon.ArrowDown stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'at-sign': return <Icon.AtSign stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'award': return <Icon.Award stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth} strokeWidth={strokeWidth}/>;
        case 'book': return <Icon.BookOpen stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth} />;
        case 'battery': return <Icon.BatteryCharging stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'briefcase': return <Icon.Briefcase stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'camera': return <Icon.Camera stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'clipBoard': return <Icon.Clipboard stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'coffee': return <Icon.Coffee stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'dollar': return <Icon.DollarSign stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'edit': return <Icon.Edit stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'fileText': return <Icon.FileText stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'github': return <Icon.Github stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'gift': return <Icon.Gift stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'instagram': return <Icon.Instagram stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'mail': return <Icon.Mail stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'music': return <Icon.Music stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'user': return <Icon.User stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'droplet': return <Icon.Droplet stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'codePen': return <Icon.Codepen stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        case 'smile': return <Icon.Smile stroke="black" width={width_height} height={width_height} strokeWidth={strokeWidth}/>;
        default : return false;
    }
}

export default icons;