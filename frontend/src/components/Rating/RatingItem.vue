<template>
    <fragment>
        <div class="row__num">{{ index + 1 }}</div>
        <div class="row__info">
            <img class="row__img" :src="rating.img" alt="" />
            <div class="row__wrap">
                <h4 class="row__title">
                    {{ rating.name }}
                </h4>
                <span v-if="rating.description" class="row__description"
                    >Отдел: {{ rating.description }}</span
                >
                <p class="row__raiting">
                    Рейтинг

                    {{
                        sort === 'month'
                            ? rating.ratingMonth
                            : sort === 'week'
                            ? rating.ratingWeek
                            : rating.ratingDay
                    }}
                </p>
            </div>
        </div>
    </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
    name: 'RatingItem',
    components: { Fragment },
    props: {
        rating: {
            type: Object,
            default: () => {},
        },
        sort: {
            type: String,
            default: 'month',
        },
        index: {
            type: Number,
            default: 1,
        },
    },
}
</script>

<style lang="scss" scoped>
.row {
    &__item {
        &:nth-child(1) {
            .row__num {
                background-color: #ebe31d;
                font-size: 48px;
            }
        }
        &:nth-child(2) {
            .row__num {
                background-color: #99a4a5;
                font-size: 48px;
            }
        }
        &:nth-child(3) {
            .row__num {
                background-color: #be8e10;
                font-size: 48px;
            }
        }
    }

    &__num {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #5f66a9;
        color: #fff;
        font-size: 36px;
        width: 81px;
        height: 88px;
    }

    &__info {
        display: flex;
        flex: 1;
    }

    &__img {
        margin-right: 11px;
    }

    &__title,
    &__raiting {
        font-size: 18px;
        line-height: 16px;
        color: #7d849a;
    }

    &__title {
        padding-top: 8px;
        color: #1a2740;
    }
    &__description {
        font-size: 12px;
        line-height: 25px;
        color: #7d849a;
    }

    &__raiting {
        margin-top: 7px;
    }
}
</style>
