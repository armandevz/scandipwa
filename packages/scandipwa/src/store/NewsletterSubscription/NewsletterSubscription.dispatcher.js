/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import NewsletterSubscriptionQuery from 'Query/NewsletterSubscription.query';
import { showNotification } from 'Store/Notification/Notification.action';
import { fetchMutation, getErrorMessage } from 'Util/Request';

/**
 * Product Cart Dispatcher
 * @class NewsletterSubscriptionDispatcher
 * @namespace Store/NewsletterSubscription/Dispatcher
 */
export class NewsletterSubscriptionDispatcher {
    subscribeToNewsletter(dispatch, email) {
        return fetchMutation(NewsletterSubscriptionQuery.getSubscribeToNewsletterMutation(email)).then(
            /** @namespace Store/NewsletterSubscription/Dispatcher/fetchMutationThen */
            () => {
                dispatch(showNotification('success', __('A subscription confirmation email has been sent!')));
            },
            /** @namespace Store/NewsletterSubscription/Dispatcher/fetchMutationSuccess */
            (error) => dispatch(showNotification('error', getErrorMessage(error)))
        );
    }
}

export default new NewsletterSubscriptionDispatcher();
