// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Marus" width="100" />
         *
         */

        <svg width="92" height="32" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                //This path is for the larger flame component
                d="M19.6,6.7L7.2,31.5c-3.42,0-6.2-2.78-6.2-6.2L13.4,0.5C16.82,0.5,19.6,3.28,19.6,6.7z"
                fill={theme.palette.primary.dark}
            />
            <path
                //This path is for the smaller flame component
                d="M22.7,25.3l-3.1,6.2c-3.42,0-6.2-2.78-6.2-6.2l3.1-6.2C19.92,19.1,22.7,21.88,22.7,25.3z"
                fill={theme.palette.secondary.dark}
            />
            <path
                //This path is the "M" in Marus
                d="M38.31,7.35l3.52-4.45h1.76v8.78h-1.65V5.24L38.6,9.51h-0.7l-3.34-4.29v6.46h-1.64V2.9h1.92L38.31,7.35z"
                strokeWidth={0}
                stroke={theme.palette.grey[900]}
                fill={theme.palette.grey[900]}
            />
            <path
                //This path is the "a" in Marus
                d="M49.03,7.64c0-0.78-0.63-1.05-1.44-1.05c-0.87,0-1.32,0.36-1.59,0.72l-0.94-0.9c0.25-0.47,1.16-1.09,2.44-1.09
		c2.13,0,3,0.77,3,2.8v2.14c0,0.36,0.32,0.63,0.79,0.63l-0.22,0.88c-0.81,0-1.31-0.29-1.55-0.67c-0.4,0.41-0.96,0.72-2.19,0.72
		c-1.94,0-2.72-0.79-2.72-1.94C44.61,7.52,48.18,8.13,49.03,7.64z M49.03,9.81V8.67c-0.92,0.32-2.85-0.01-2.85,1.2
		c0,0.36,0.24,0.73,1.31,0.73C48.16,10.6,48.78,10.42,49.03,9.81z"
                strokeWidth={0}
                stroke={theme.palette.grey[900]}
                fill={theme.palette.grey[900]}
            />
            <path
                //This path is the "r" in Marus
                d="M51.74,11.68V5.54l0.95-0.14l0.36,1.09c0.38-0.59,1.06-1.07,2.11-1.07c0.57,0,1.1,0.04,1.43,0.31l-0.2,1.36
		c-0.46-0.25-0.79-0.32-1.19-0.32c-1.02,0-1.93,0.67-1.93,1.56v3.34H51.74z"
                strokeWidth={0}
                stroke={theme.palette.primary.main}
                fill={theme.palette.grey[900]}
            />
            <path
                //This path is the "u" in Marus
                d="M63.6,5.46v6.16l-0.65,0.12c-0.26-0.19-0.52-0.52-0.67-0.84c-0.45,0.55-1.28,0.93-2.38,0.93c-1.59,0-2.96-0.94-2.96-2.58
		V5.46h1.52v3.55c0,0.89,0.78,1.53,1.7,1.53c0.74,0,1.9-0.55,1.9-1.07v-4H63.6z"
                strokeWidth={0}
                stroke={theme.palette.primary.main}
                fill={theme.palette.grey[900]}
            />
            <path
                //This path is the "s" in Marus
                d="M70.46,6.55l-1.2,0.77c-0.19-0.35-0.71-0.77-1.8-0.77c-0.69,0-1.28,0.2-1.28,0.61c0,0.41,0.58,0.54,1.29,0.66
		c1.84,0.31,3.18,0.53,3.18,2c0,1.58-1.76,1.97-3.11,1.97c-1.56,0-2.77-0.56-3.3-1.45l1.31-0.66c0.26,0.38,0.87,0.89,1.93,0.89
		c0.69,0,1.73-0.23,1.73-0.69c0-0.37-0.42-0.52-0.95-0.64c-1.92-0.42-3.53-0.54-3.53-2.12c0-1.26,1.02-1.78,2.81-1.78
		C69.13,5.35,70.21,5.94,70.46,6.55z"
                strokeWidth={0}
                stroke={theme.palette.primary.main}
                fill={theme.palette.grey[900]}
            />
            <path
                //This path is the "L" in Learn
                d="M43.51,28.82H32.69V13.77h3.19v12.1h7.95L43.51,28.82z"
                strokeWidth={0}
                stroke={theme.palette.primary.main}
                fill={theme.palette.grey[900]}
            />
            <path
                //This path is the "e" in Learn
                d="M54.75,22.62c0,1.42-0.97,1.65-2.1,1.65h-5.39c0.21,1.34,1.21,2.1,2.55,2.1c1.26,0,2-0.45,2.51-1.09l2.18,1.11
		C53.37,28.34,51.91,29,49.69,29c-2.94,0-5.31-2.45-5.31-5.72c0-3.15,2.16-5.5,5.31-5.5C52.53,17.78,54.75,19.53,54.75,22.62z
		 M47.3,22.25h4.84c-0.19-1.26-1.28-1.91-2.37-1.91C48.7,20.33,47.55,21.08,47.3,22.25z"
                strokeWidth={0}
                stroke={theme.palette.primary.main}
                fill={theme.palette.grey[900]}
            />
            <path
                //This path is the "a" in Learn
                d="M63.23,21.82c0-0.99-0.56-1.52-1.98-1.52c-1.09,0-1.85,0.7-2.33,1.34l-1.75-1.71c0.31-0.88,1.96-2.16,4.06-2.16
		c3.13,0,4.78,1.19,4.78,4.73v3.77c0,0.51,0.49,0.97,1.23,0.97l-0.41,1.73c-1.34,0-2.26-0.56-2.59-1.23
		c-0.51,0.7-1.48,1.32-3.29,1.32c-3.11,0-4.34-1.42-4.34-3.5C56.61,21.65,62.02,22.41,63.23,21.82z M63.23,25.4v-1.54
		c-1.56,0.37-3.75-0.04-3.75,1.69c0,0.47,0.31,0.95,1.69,0.95C62.06,26.49,62.88,26.22,63.23,25.4z"
                strokeWidth={0}
                stroke={theme.palette.primary.main}
                fill={theme.palette.grey[900]}
            />
            <path
                //This path is the "r" in Learn
                d="M69.18,28.82V18.15l1.87-0.29l0.45,1.77c0.51-0.93,1.5-1.71,2.96-1.71c0.99,0,1.93,0.08,2.55,0.68l-0.37,2.78
		c-0.93-0.54-1.48-0.66-2-0.66c-1.4,0-2.63,1.01-2.63,2.28v5.8H69.18z"
                strokeWidth={0}
                stroke={theme.palette.primary.main}
                fill={theme.palette.grey[900]}
            />
            <path
                //This path is the "n" in Learn
                d="M78.84,28.82V18.17l1.32-0.29c0.43,0.35,0.82,0.97,1.01,1.48c0.72-0.84,1.65-1.58,3.58-1.58c2.45,0,4.82,1.65,4.82,4.55
		v6.48h-2.84v-6.13c0-1.3-1.11-2.24-2.37-2.24c-1.01,0-2.66,0.72-2.66,1.5v6.88H78.84z"
                strokeWidth={0}
                stroke={theme.palette.primary.main}
                fill={theme.palette.grey[900]}
            />
        </svg>
    );
};

export default Logo;
