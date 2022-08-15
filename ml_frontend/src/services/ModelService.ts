import http from "@/utils/http-common";
class ModelService {
    getScores(modelName: string): Promise<any> {
        return http.get(`/scores/${modelName}`);
    }
    getPredict(data: any, modelName: string): Promise<any> {
        return http.post(`/predict/${modelName}`, data);
    }
    getCatAtt(): Promise<any> {
        return http.get(`/cat_attribute`);
    }
}

export default new ModelService();
