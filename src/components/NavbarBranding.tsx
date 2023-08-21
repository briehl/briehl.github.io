import classes from './Navbar.module.scss';

/**
 * The left-side branding bit of the navbar. Should have my name, maybe a little icon,
 * something else professional, and flashy, yet subdued.
 *
 * Right now, just Digital Dissonance.
 */
export function Branding() {
    return (
        <div className={classes.navbar_branding}>
            <b>Bill Riehl</b>
        </div>
    );
}