import React from 'react';
import styles from '../../css/Navbar.module.css';
import PropTypes from 'prop-types';
import { Branding, SocialLinks } from './Branding';

const targets = ['#home', '#projects', '#resume', '#contact'],
  targetLabels = ['Home', 'Projects', 'Resume', 'Contact'],
  initBgR = 174,
  initBgG = 231,
  initBgB = 228,
  initTextR = 0,
  initTextG = 0,
  initTextB = 0;  // the final text colors == initBg*

/**
 * This navbar changes its color while scrolling. It gradually fades to black, all Metallica style.
 */
export default class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opacity: 1,
      bgR: initBgR,
      bgG: initBgG,
      bgB: initBgB,
      textR: initTextR,
      textG: initTextG,
      textB: initTextB,
      selectedIdx: 0
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  /**
   * Scrolling does a few things.
   * 1. Changes text and background color. Between the top of the page and some limit, the color
   *   of text and bg fade from one thing to another. Text goes from black -> bluish, and
   *   background color goes from bluish to black. This updates the state.
   * 2. Detect what element is most in view and change the selected nav item based on that.
   * @param {ScrollEvent} e
   */
  handleScroll(e) {
    // figure out the color setup
    const maxScroll = 550
    let scrollTop = window.scrollY,
        percentDown = scrollTop/maxScroll,
        invPercentDown = 1 - percentDown,
        r = initBgR * invPercentDown,
        g = initBgG * invPercentDown,
        b = initBgB * invPercentDown,
        textR = Math.min(initBgR, initBgR * percentDown),
        textG = Math.min(initBgG, initBgG * percentDown),
        textB = Math.min(initBgB, initBgB * percentDown),
        opacity = 1 - Math.min(percentDown, 0.2)

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

    // update the state
    this.setState((state) => ({
      opacity: opacity,
      bgR: r,
      bgG: g,
      bgB: b,
      textR: textR,
      textG: textG,
      textB: textB,
      selectedIdx: selectedIdx
    }))
  }

  NavTab(props) {
    let borderColor = props.selected ? `rgba(${props.textR}, ${props.textG}, ${props.textB}, ${props.selected ? 1 : 0})` : '',
      tabButton = (
        <div>
          <a href={props.target} onClick={props.onClick}>
            <div className={styles.navbarTab} style={{borderColor: borderColor}}>{props.label}</div>
          </a>
        </div>
      );
    return tabButton;
  }

  handleTabClick(e) {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href')
    const elem = document.querySelector(target)
    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  render() {
    let newBgColor = `rgba(${this.state.bgR}, ${this.state.bgG}, ${this.state.bgB}, ${this.state.opacity})`;
    let textColor = {
      textR: this.state.textR,
      textG: this.state.textG,
      textB: this.state.textB
    };
    let newTextColor = `rgb(${this.state.textR}, ${this.state.textG}, ${this.state.textB})`;
    return (
      <div className={styles.navbarContainer} style={{ backgroundColor: newBgColor, color: newTextColor }}>
        <Branding />
        <div style={{marginLeft: "auto"}}>
          <div className={styles.navbarTabList}>
            {
              targets.map((target, idx) => {
                let tabProps = {
                  key: idx,
                  label: targetLabels[idx],
                  target: target,
                  onClick: this.handleTabClick,
                  selected: this.state.selectedIdx === idx,
                  ...textColor
                };
                return <this.NavTab {...tabProps}/>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

function isInView(element, offset) {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight + offset) && rect.bottom >= 0;
}

NavBar.propTypes = {
  location: PropTypes.object
}