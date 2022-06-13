// ******************** //
// Shared variables for the app route, after login.
// ******************** //

import type { FronvoAccount } from 'src/interfaces/app/main';
import CommunitiesPanel from 'src/lib/app/main/panels/CommunitiesPanel.svelte';
import FriendsPanel from 'src/lib/app/main/panels/FriendsPanel.svelte';
import HomePanel from 'src/lib/app/main/panels/HomePanel.svelte';
import MarketplacePanel from 'src/lib/app/main/panels/MarketplacePanel.svelte';
import { writable, type Writable } from 'svelte/store';

export const mainVisible = writable(false);

export const loginSucceeded = writable(false);

// Filled in after login
export const userData: Writable<FronvoAccount> = writable();

// Panel switching
export const panels = [
    HomePanel,
    FriendsPanel,
    CommunitiesPanel,
    MarketplacePanel,
];

// Default to Home
export const currentPanelId = writable(0);
