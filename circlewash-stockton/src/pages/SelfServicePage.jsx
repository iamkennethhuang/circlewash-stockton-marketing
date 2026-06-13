import { useState } from 'react';
import { Alert, Container, IconButton, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import MarketingSplitHero from '../components/MarketingSplitHero';
import FeatureTimeline from '../components/FeatureTimeline';
import SpecComparisonTable from '../components/SpecComparisonTable';
import FAQ from '../sections/FAQ';
import { selfServicePage } from '../data/siteContent';

function SelfServicePage() {
  const { hero, rewards, washerGuide, truckComparison } = selfServicePage;
  const [showRewards, setShowRewards] = useState(true);

  return (
    <>
      <MarketingSplitHero {...hero} />
      {showRewards && (
        <Container maxWidth="xl" className="rewardAlertWrap">
          <Alert
            icon={<LocalLaundryServiceIcon />}
            className="rewardAlert"
            action={(
              <IconButton
                aria-label="Close drying rewards notice"
                color="inherit"
                size="small"
                onClick={() => setShowRewards(false)}
              >
                <CloseRoundedIcon fontSize="inherit" />
              </IconButton>
            )}
          >
            <Typography component="span">
              <strong>{rewards.label}</strong> {rewards.items.join('  |  ')}
            </Typography>
          </Alert>
        </Container>
      )}
      {/* <FeatureTimeline
        title={washerGuide.title}
        items={washerGuide.items}
        image={washerGuide.cardImage}
      /> */}
      <SpecComparisonTable {...truckComparison} />
      <FAQ />
    </>
  );
}

export default SelfServicePage;
