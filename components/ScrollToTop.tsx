import React, {FunctionComponent} from 'react';
import { Fab } from '@mui/material';
import { KeyboardArrowUpOutlined } from '@mui/icons-material';

export const ScrollToTop: FunctionComponent = () => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <Fab color="primary" size="small" onClick={handleClick} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          <KeyboardArrowUpOutlined />
        </Fab>
      );
}