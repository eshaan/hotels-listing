import { compose } from 'recompose';
import Hotels from './Hotels';
import { hotelsListingConnector as withHotelsListingConnector } from '../../store/connectors/hotelsListingConnector';

export default compose(withHotelsListingConnector)(Hotels);

