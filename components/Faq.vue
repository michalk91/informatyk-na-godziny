<template>
  <section class="container">
    <span class="title">Faq</span>
    <div v-for="question of questions" class="question-container">
      <div class="question-inner-container">
        <article class="question">
          {{ question.name }}
        </article>
        <div
          @click="handleClick(question.id)"
          class="toggle"
          :class="{ rotate: openedQuestionID === question.id }"
        >
          <span class="line-one"></span>
          <span class="line-two"></span>
        </div>
      </div>
      <div v-if="openedQuestionID === question.id" class="answer-container">
        <span class="answer">{{ question.body }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openedQuestionID = shallowRef<number | null>(null);

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
    "https://jsonplaceholder.typicode.com/posts/1/comments"
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
.container {
  width: 100%;
  padding-left: $horizontal-padding;
  padding-right: $horizontal-padding;
  text-align: center;
  margin-bottom: 183px;

  @media screen and (max-width: 1400px) {
    padding-left: $mobile-horizontal-padding;
    padding-right: $mobile-horizontal-padding;
  }

  .answer-container {
    display: flex;
    flex-direction: column;

    .answer {
      color: #e6e6f0;
      font-size: 18px;
      line-height: 25.2px;
    }
  }

  .title {
    font-size: 44px;
    line-height: 57.2px;
    text-transform: uppercase;
  }

  .question-container {
    display: flex;
    flex-direction: column;
    justify-content: end;
    min-height: 86px;
    border-top: 1px solid white;

    .question-inner-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: end;
    }

    .question {
      font-size: 20px;
      line-height: 28px;
      padding-bottom: 16px;
    }
    .rotate {
      transition: 0.7s;
      transform: rotate(45deg);
    }
    .toggle {
      width: 53px;
      height: 53px;
      position: relative;

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

      &:hover {
        cursor: pointer;

        .line-one,
        .line-two {
          background-color: red;
        }
      }
    }
  }
}
</style>
