<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" :stretch="true">
          <el-tab-pane label="Prediction" name="first">
            <el-row :gutter="12">
              <el-col>
                <el-card shadow="hover">
                  <div class="card-content" @click="isShowTable = !isShowTable">View Sample Data</div>
                </el-card>
                <SampleTable v-if="isShowTable" />
              </el-col>
            </el-row>
            <el-divider />
            <el-row :gutter="12">
              <el-col :span="8">
                <el-card shadow="hover" @click="handleSelectModel('Logistic_Regression')">
                  <div class="card-content">Logistic Regression</div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card shadow="hover" @click="handleSelectModel('Decision_Tree')">
                  <div class="card-content">Decision Tree</div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card shadow="hover" @click="handleSelectModel('SVM')">
                  <div class="card-content">Support Vector Machine</div>
                </el-card>
              </el-col>
            </el-row>
            <el-divider />
            <PredictForm :model-name="modelName" />
          </el-tab-pane>
          <el-tab-pane label="Model Score" name="second">
            <el-divider />
            <ScoreForm />
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import PredictForm from '@/components/PredictForm.vue';
import ScoreForm from '@/components/ScoreForm.vue';
import SampleTable from '@/components/SampleTable.vue';
export default defineComponent({
  setup() {
  },
  mounted() {
    this.activeName = 'first'
  },
  components: {
    PredictForm,
    ScoreForm,
    SampleTable,
  },
  data() {
    return {
      activeName: '',
      form: {
        name: '',
      },
      modelName: 'SVM',
      isShowTable: false,
    }
  },
  methods: {
    handleClick: (tab: TabsPaneContext, event: Event) => {
      console.log(tab, event)
    },
    handleSelectModel: function (modelName: string) {
      this.modelName = modelName;
    }
  }
})
</script>
<style>
.card-content {
  text-align: center;
}
</style>
