import { Box } from '@mui/material';
import imageCandidates from '../data/images';

function Picture({ name, alt, className, sx }) {
  const candidates = imageCandidates[name] || [];

  if (candidates.length === 0) {
    return null;
  }

  return (
    <Box
      component="img"
      className={className}
      src={`${import.meta.env.BASE_URL}images/${candidates[0]}`}
      alt={alt}
      sx={sx}
      onError={(event) => {
        const index = Number(event.currentTarget.dataset.index || 0);
        if (index + 1 < candidates.length) {
          event.currentTarget.dataset.index = index + 1;
          event.currentTarget.src = `${import.meta.env.BASE_URL}images/${candidates[index + 1]}`;
          return;
        }
        event.currentTarget.style.display = 'none';
      }}
    />
  );
}

export default Picture;
