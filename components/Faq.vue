<template>
  <section ref="sectionRef" class="container">
    <span class="title">Faq</span>
    <article
      v-if="!error"
      v-for="question of questions"
      class="question-container"
    >
      <div class="question-inner-container">
        <span class="question">
          {{ question.name }}
        </span>
        <div
          @click="handleClick(question.id)"
          class="toggle"
          :class="{
            rotate: openedQuestionID === question.id,
            'rotate-back': openedQuestionID !== question.id,
            opened: openedQuestionID === question.id,
          }"
        >
          <span class="line-one"></span>
          <span class="line-two"></span>
        </div>
      </div>

      <TransitionGroup name="list" tag="div">
        <div v-if="openedQuestionID === question.id" class="answer-container">
          <span class="answer">{{ question.body }}</span>
        </div>
      </TransitionGroup>
    </article>
    <div v-else>
      <FetchDataError />
    </div>
  </section>
</template>

<script setup lang="ts">
import useScrollToSection from "~/composables/useScrollToSection";

const sectionRef = ref<null | HTMLElement>(null);
const openedQuestionID = shallowRef<number | null>(null);

const screenName = useScreenStore();

onMounted(() => {
  useScrollToSection({
    elemRef: sectionRef.value,
    screenStore: screenName,
    screenName: "faq",
    block: "start",
  });
});

interface FetchedData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface FetchError {
  message: string;
}

interface UseFetchResponse<T> {
  data: Ref<T | null>;
  error: Ref<FetchError | null>;
}

const { data: questions, error }: UseFetchResponse<FetchedData[]> =
  await useFetch<FetchedData[]>(
    "https://jsonplaceholder.typicode.com/posts/1/comments",
    {
      lazy: true,
    }
  );

function handleClick(id: number) {
  if (openedQuestionID.value === id) {
    openedQuestionID.value = null;
  } else {
    openedQuestionID.value = id;
  }
}
</script>

<style scoped lang="scss">
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.42, 0.97, 0.52, 1.49);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.opened {
  .line-one,
  .line-two {
    background-color: #ff7c5f !important;
  }
}

.container {
  width: 100%;
  padding-left: $horizontal-padding;
  padding-right: $horizontal-padding;
  text-align: center;
  margin-bottom: 183px;
  scroll-margin-top: 180px;

  @media screen and (max-width: 1400px) {
    padding-left: $mobile-horizontal-padding;
    padding-right: $mobile-horizontal-padding;
  }

  .answer-container {
    display: flex;
    flex-direction: column;

    .answer {
      text-align: left;
      color: #e6e6f0;
      font-size: 1.125rem;
      line-height: 25.2px;
      padding-bottom: 16px;
    }
  }

  .title {
    font-size: 2.75rem;
    line-height: 57.2px;
    text-transform: uppercase;
  }

  .question-container {
    display: flex;
    flex-direction: column;
    justify-content: end;
    min-height: 86px;
    border-top: 1px solid white;
    margin: 0;

    .question-inner-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: end;
      padding-top: 33px;
    }

    .question {
      text-align: left;
      font-size: 1.25rem;
      line-height: 28px;
      padding-bottom: 16px;
    }
    .rotate {
      transition: 0.7s;
      transform: rotate(-45deg);
    }

    .rotate-back {
      transition: 0.7s;
      transform: rotate(-90deg);
    }

    .toggle {
      width: 53px;
      height: 53px;
      flex-shrink: 0;
      position: relative;
      right: 0;

      .line-one,
      .line-two {
        display: block;
        position: relative;
        background-color: white;
        height: 30.92px;
        width: 2px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .line-two {
        height: 2px;
        width: 30.92px;
        transform: translate(-15px, -31px);
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          cursor: pointer;

          .line-one,
          .line-two {
            background-color: #007f3d;
          }
        }
      }
    }
  }
}
</style>
