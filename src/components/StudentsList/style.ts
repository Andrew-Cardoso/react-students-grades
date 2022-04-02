import {styled} from '@stitches/react';

export const ListContainer = styled('article', {
	width: '100%',
	height: '100%',
	overflowX: 'hidden',
	overflowY: 'auto',
	display: 'flex',
	flexDirection: 'column',
	paddingBottom: '2rem',
});

export const ListItem = styled('section', {
	width: '100%',
	display: 'grid',
	alignItems: 'center',
	justifyContent: 'flex-start',
	height: '40px',
});
