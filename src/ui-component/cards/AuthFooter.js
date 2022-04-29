// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://maruslearn.com" target="_blank" underline="hover">
            maruslearn.com
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https:/maruslearn.com" target="_blank" underline="hover">
            &copy; marusgroup.com
        </Typography>
    </Stack>
);

export default AuthFooter;
