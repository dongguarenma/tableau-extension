// Tableau 扩展接口
class TableauAIExtension {
    constructor() {
        this.analyzer = new DataTrendAnalyzer();
        this.generator = new StoryGenerator();
        this.loadingElement = document.getElementById('loading');
    }
    
    async processWorksheet(worksheet) {
        try {
            this.showLoading();
            
            // 获取数据
            const data = await worksheet.getSummaryDataAsync();
            
            // 分析趋势
            const insights = await this.analyzer.analyzeTrends(data);
            
            // 生成故事
            const story = await this.generator.generateStory(insights);
            
            // 展示结果
            this.displayResults(story);
        } catch (error) {
            console.error('处理数据时出错:', error);
            this.displayError(error);
        } finally {
            this.hideLoading();
        }
    }
    
    showLoading() {
        this.loadingElement.style.display = 'block';
    }
    
    hideLoading() {
        this.loadingElement.style.display = 'none';
    }
    
    displayResults(story) {
        const container = document.getElementById('insights');
        container.innerHTML = story;
    }
    
    displayError(error) {
        const container = document.getElementById('insights');
        container.innerHTML = `
            <div class="error">
                <h2>发生错误</h2>
                <p>${error.message}</p>
            </div>
        `;
    }
}

// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 初始化扩展
    tableau.extensions.initializeAsync().then(() => {
        const extension = new TableauAIExtension();
        const worksheet = tableau.extensions.worksheetContent.worksheet;
        extension.processWorksheet(worksheet);
    }).catch(error => {
        console.error('初始化 Tableau 扩展时出错:', error);
        document.getElementById('insights').innerHTML = `
            <div class="error">
                <h2>初始化错误</h2>
                <p>无法初始化 Tableau 扩展。请确保在 Tableau 环境中运行。</p>
            </div>
        `;
    });
}); 