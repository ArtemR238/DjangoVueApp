<template>
    <div class="header-container">
        <h1 class="header-container__page-name">
            {{ pageName }}
        </h1>
        <div
            v-if="statistics.status === 'success'"
            class="user-statistics"
            :class="{
                hidden: $router.currentRoute.path === '/',
            }"
        >
            <div class="user-statistics__stat-block">
                <CoinSvg class="user-statistics__icon" />
                <span
                    class="user-statistics__text user-statistics__text_color_yellow"
                    >{{
                        String(statistics.money).replace(
                            /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                            '$1 '
                        )
                    }}</span
                >
            </div>
            <div class="user-statistics__stat-block">
                <LightningSvg class="user-statistics__icon" />
                <span
                    class="user-statistics__text user-statistics__text_color_green"
                    >{{
                        String(statistics.energy).replace(
                            /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                            '$1 '
                        )
                    }}</span
                >
            </div>
            <div class="user-statistics__stat-block">
                <HeartSvg class="user-statistics__icon" />
                <span
                    class="user-statistics__text user-statistics__text_color_red"
                    >{{
                        String(statistics.health).replace(
                            /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                            '$1 '
                        )
                    }}</span
                >
            </div>
        </div>
    </div>
</template>

<script>
import CoinSvg from '@/assets/icons/coin.svg'
import HeartSvg from '@/assets/icons/heart.svg'
import LightningSvg from '@/assets/icons/lightning.svg'
import routesList from '@/router/routesList'

export default {
    name: 'Header',
    components: { CoinSvg, HeartSvg, LightningSvg },
    props: {
        statistics: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            routesList,
            pageName: '',
        }
    },

    watch: {
        $route(to) {
            this.getPageName(to.fullPath)
        },
    },

    mounted() {
        this.getPageName(this.$router.currentRoute.fullPath)
    },

    methods: {
        getPageName(currentPath) {
            for (var page in this.routesList) {
                const currentRoute = `/${currentPath.split('/')[1]}`
                if (this.routesList[page].path === currentRoute) {
                    this.pageName = this.routesList[page].header
                }
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.header-container {
    background-color: #5f66a9;
    width: 100%;
    height: 91px;
    position: absolute;
    z-index: 1000;
    right: 0;
    top: 0;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 28px 33px 28px 140px;
    &__page-name {
        width: 300px;
        height: 30px;
        font-family: 'Advent Pro', sans-serif;
        font-size: 36px;
        font-weight: 600;
        line-height: 28px;
        color: #f0f3fe;
    }

    .user-statistics {
        display: flex;
        &__stat-block {
            display: flex;
            align-items: center;
            margin-left: 60px;
        }
        &__icon {
            width: 20px;
            height: 20px;
        }
        &__text {
            font-family: 'Advent Pro', sans-serif;
            font-weight: bold;
            font-size: 20px;
            line-height: 16px;
            margin-left: 5px;

            &_color {
                &_red {
                    color: #ff8a8a;
                }
                &_yellow {
                    color: #edd92a;
                }
                &_green {
                    color: #b0dcf5;
                }
            }
        }
    }

    .hidden {
        visibility: hidden;
    }
}

@media (max-width: $media-breakpoint-md) {
    .header-container {
        padding: 25px 90px;
        &__page-name {
            font-size: 20px;
        }

        .user-statistics {
            &__stat-block {
                margin-left: 20px;
            }
            &__icon {
                width: 20px;
            }
            &__text {
                font-size: 16px;
                line-height: 16px;
            }
        }
    }
}

@media (max-width: $media-breakpoint-sm) {
    .header-container {
        position: absolute;
        flex-direction: column-reverse;
        padding: 0;
        border: none;
        &__page-name {
            margin-top: 16px;
            font-size: 18px;
        }

        .user-statistics {
            width: 100%;
            height: 36px;
            padding: 10px 0;
            justify-content: space-around;
            align-items: center;
            box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.1);
            &__stat-block {
                margin: 0;
            }
            &__icon {
                width: 20px;
            }
            &__text {
                font-size: 16px;
                line-height: 16px;
            }
        }
        .hidden {
            visibility: visible;
        }
    }
}
</style>
