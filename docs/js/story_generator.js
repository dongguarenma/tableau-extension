class StoryGenerator {
    async generateStory(insights) {
        const { trends, anomalies } = insights;
        let story = '<div class="story">';
        
        // 生成趋势描述
        if (trends.length > 0) {
            story += '<h2>数据趋势分析</h2>';
            story += '<div class="trends">';
            story += trends.map(trend => `<p>📈 ${trend.description}</p>`).join('');
            story += '</div>';
        }
        
        // 生成异常描述
        if (anomalies.length > 0) {
            story += '<h2>异常值发现</h2>';
            story += '<div class="anomalies">';
            story += anomalies.map(anomaly => `<p>⚠️ ${anomaly.description}</p>`).join('');
            story += '</div>';
        }
        
        if (trends.length === 0 && anomalies.length === 0) {
            story += '<p>未发现显著的数据趋势或异常。</p>';
        }
        
        story += '</div>';
        return story;
    }
} 