import { Box, Button, Divider, Grid } from '@mui/material';
import React from 'react';
import logo from '../../../assets/images/client_logo.svg';
import { Link } from 'react-router-dom';
import { IconArrowLeftSingle, IconDocumentAttachment, IconPrinter } from '../../../utils/SvgUtil';

export const ViewDocument = () => {
  return (
    <div className="px-8 pb-6 pt-20 bg-gray-week">
      <div className="p-4 rounded-2xl border border-faded-light shadow-sm bg-white">
        {/* Back to Listing Link */}
        <Link to="/finance/documents" style={{ textDecoration: 'none' }}>
          <Box display={'flex'} alignItems={'center'}>
            <IconArrowLeftSingle size={16} color="#75A428" />
            <span className="text-xs font-medium text-primary-base">Back to listing</span>
          </Box>
        </Link>
        {/* Header with Document Info and Print Button */}
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} py={2}>
          <Box display={'flex'} gap={1} alignItems={'center'}>
            <IconDocumentAttachment size={24} color="#525866" />
            <span className="font-medium text-lg text-text-dark">Document - Payment Past Due</span>
          </Box>
          <Box display={'flex'} gap={1} alignItems={'center'}>
            <Button
              sx={{
                borderRadius: '8px',
                border: 'none',
                color: '#ffff',
                background: '#75A428',
                fontWeight: '500',
                fontSize: '14px',
                '&:hover': { backgroundColor: '#a2c56a', color: '#fff' },
              }}
              startIcon={<IconPrinter size={20} color="#fff" />}
            >
              Print
            </Button>
          </Box>
        </Box>
        <Divider orientation="horizontal" />
        {/* Document Content */}

        <div className="mt-3 p-8 rounded-2xl border border-faded-light shadow-sm bg-white ">
          <Grid container alignItems={'center'}>
            <Grid item xs={12} lg={6}>
              <Box display={'flex'} flexDirection={'column'}>
                <span className="text-2xl font-medium text-text-dark pb-2">Payment Past Due</span>
                <span className="text-sm font-medium text-text-dark">LawnProSoftware.com</span>
                <span className="text-sm font-normal text-gray-600">20 Montclair Drive</span>
                <span className="text-sm font-normal text-gray-600">gadsden AL 35901</span>
                <span className="text-sm font-normal text-gray-600">205-369-7052</span>
                <span className="text-sm font-normal text-gray-600">https://www.gadsdenlawncare.com</span>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className="flex lg:justify-end">
                <img src={logo} className="max-w-full   h-auto" alt="logo" />
              </div>
            </Grid>
          </Grid>
          {/* Document Message */}
          <Box>
            <span className="text-sm font-normal text-text-dark block py-5">10/09/24</span>
            <span className="text-sm font-normal text-text-dark block py-5">RE: Payment Past Due</span>
            <span className="text-sm font-normal text-text-dark block pt-5 pb-3">Dear Ashlyn Carter</span>
            <span className="text-sm font-normal text-text-dark block pb-4">
              We are all busy and I know sometimes things slip through the cracks. Your bill with us is now past due for
              the amount of $____________. We are still servicing your property because you have always been a valued
              client and I'm sure this is just an oversight on your part. Can you please send me the payment as soon as
              you have a chance?
            </span>
            <span className="text-sm font-normal text-text-dark block pb-5">
              If you are unable to catch your balance up at this time, please call or write me today so that we might
              arrange a payment schedule. <br /> Thanks in advance for your attention to this matter.
            </span>
            <span className="text-sm font-normal text-text-dark block pt-5 pb-4">
              I look forward to hearing from you.
            </span>
            <span className="text-sm font-normal text-text-dark block   pb-4">Respectfully,</span>
            <span className="text-sm font-normal text-text-dark block   pb-4">LawnProSoftware.com</span>
          </Box>
        </div>
      </div>
    </div>
  );
};
