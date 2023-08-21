import React, { FC, useEffect, useState } from 'react';
import classes from './Navbar.module.scss';
import { Branding } from './NavbarBranding';

const targets: string[] = ['#home', '#projects', '#resume', '#contact'],
    targetLabels: string[] = ['Home', 'Projects', 'Resume', 'Contact'],
    defaultBgColor: RGBColor = {
        red: 174,
        green: 231,
        blue: 228
    },
    defaultTextColor: RGBColor = {
        red: 0,
        green: 0,
        blue: 0
    };

export const defaultNavbarProps: NavbarProps = {
    opacity: 1,
    selectedIdx: 0,
    bgColor: defaultBgColor,
    textColor: defaultTextColor
};

/**
 * This navbar changes its color while scrolling. It gradually fades to black, all Metallica style.
 */

export interface RGBColor {
    red: number;
    green: number;
    blue: number;
}

export interface NavbarProps {
    opacity: number;
    bgColor: RGBColor;
    textColor: RGBColor;
    selectedIdx: number;
}

interface NavbarTabProps {
    selected: boolean;
    color: RGBColor;
    target: string;
    onClick: React.MouseEventHandler,
    label: string
}

const getRGBColor = (color: RGBColor, opacity: number=1): string => {
    return `rgba(${color.red}, ${color.green}, ${color.blue}, ${opacity})`;
};

const isInView = (element: HTMLElement | null, offset: number): boolean => {
    if (element === null) {
        return false;
    }
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight + offset) && rect.bottom >= 0;
}

const Navbar: FC<NavbarProps> = (props: NavbarProps = defaultNavbarProps) => {
    const [opacity, setOpacity] = useState(props.opacity);
    const [bgColor, setBgColor] = useState(props.bgColor);
    const [textColor, setTextColor] = useState(props.textColor);
    const [selectedIdx, setSelected] = useState(props.selectedIdx);

    /**
     * Scrolling does a few things.
     * 1. Changes text and background color. Between the top of the page and some limit, the color
     *   of text and bg fade from one thing to another. Text goes from black -> bluish, and
     *   background color goes from bluish to black. This updates the state.
     * 2. Detect what element is most in view and change the selected nav item based on that.
     */
    const handleScroll = (): void => {
        // figure out the color setup
        const maxScroll = 1000;
        let scrollTop = window.scrollY,
            percentDown = scrollTop/maxScroll,
            invPercentDown = 1 - percentDown;
        setBgColor({
            red: Math.floor(defaultBgColor.red * invPercentDown),
            green: Math.floor(defaultBgColor.green * invPercentDown),
            blue: Math.floor(defaultBgColor.blue * invPercentDown)
        });
        setTextColor({
            red: Math.min(defaultBgColor.red, defaultBgColor.red * percentDown),
            green: Math.min(defaultBgColor.green, defaultBgColor.green * percentDown),
            blue: Math.min(defaultBgColor.blue, defaultBgColor.blue * percentDown)
        })
        setOpacity(1 - Math.min(percentDown, 0.2));

        // calculate scroll position
        let selectedIdx = 0;

        if (scrollTop > 20) {
            const visibleElems = targets.map(target => isInView(document.querySelector(target), -300));
            for (let i=visibleElems.length-1; i>0; i--) {
                if (visibleElems[i]) {
                    selectedIdx = i;
                    break;
                }
            }
        }
        setSelected(selectedIdx);
    }

    const handleTabClick = (e: React.MouseEvent<Element>) => {
        e.preventDefault();
        if (e.currentTarget === null || !(e.currentTarget instanceof Element)) {
            return;
        }
        const target = e.currentTarget.getAttribute('href');
        if (target === null) {
            return;
        }
        const elem = document.querySelector(target);
        if (!elem) {
            return;
        }
        elem.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <div onScroll={handleScroll} className={classes.navbar_container} style={{ backgroundColor: getRGBColor(bgColor), color: getRGBColor(textColor, opacity) }}>
            <Branding />
            <div style={{marginLeft: "auto"}}>
                <div className={classes.navbar_tab_list}>
                    {
                        targets.map((target, idx) => {
                            let tabProps = {
                                key: idx,
                                label: targetLabels[idx],
                                target: target,
                                onClick: handleTabClick,
                                selected: selectedIdx === idx,
                                color: textColor
                            };
                            return <NavbarTab {...tabProps}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const NavbarTab: FC<NavbarTabProps> = (props: NavbarTabProps) => {
    return (
        <div>
            <a href={props.target} onClick={props.onClick}>
                <div className={classes.navbar_tab} style={{borderColor: props.selected ? getRGBColor(props.color, props.selected ? 1 : 0) : ''}}>
                    {props.label}
                </div>
            </a>
        </div>
    );
}

export default Navbar;


