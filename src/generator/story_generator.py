class StoryGenerator:
    def generate_insights(self, analysis_results):
        # 将分析结果转换为自然语言描述
        story_elements = []
        for trend in analysis_results.trends:
            narrative = self.create_narrative(trend)
            story_elements.append(narrative)
        return story_elements 