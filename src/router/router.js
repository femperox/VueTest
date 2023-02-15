import LotCreation from '@/pages/LotCreation'
import Menu from '@/pages/Menu'
import About from '@/pages/About'
import LotSatus from '@/pages/LotStatus'
import Bans from '@/pages/Bans'
import Parcels from '@/pages/Parcels'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
                { path: '/create',
                  component: LotCreation
                },
                { path: '/status',
                  component: LotSatus
                },
                { path: '/bans',
                  component: Bans
                },
                { path: '/',
                  component: About
                },
                { path: '/parcels',
                  component: Parcels
                }

                

               ];

const router = createRouter({  routes,
                               history: createWebHistory(process.env.BASE_URL)
                            });

export default router;