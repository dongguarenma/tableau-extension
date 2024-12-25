class StoryGenerator {
    async generateStory(insights) {
        const { trends, anomalies } = insights;
        let story = '<div class="story">';
        
        // 生成趋势描述
        if (trends.length > 0) {
            story += '<h2>数据趋势</h2>';
            story += this.generateTrendDescriptions(trends);
        }
        
        // 生成异常描述
        if (anomalies.length > 0) {
            story += '<h2>异常发现</h2>';
            story += this.generateAnomalyDescriptions(anomalies);
        }
        
        story += '</div>';
        return story;
    }

    generateTrendDescriptions(trends) {
        return trends.map(trend => `<p>${trend.description}</p>`).join('');
    }

    generateAnomalyDescriptions(anomalies) {
        return anomalies.map(anomaly => `<p>${anomaly.description}</p>`).join('');
    }
} 