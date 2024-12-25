/*!
 * Tableau Extensions API Library v1.7.0
 */
(function() {
    'use strict';
    
    // Tableau Extensions Namespace
    window.tableau = window.tableau || {};
    
    // Extensions API
    tableau.extensions = {
        initializeAsync: function() {
            return new Promise(function(resolve) {
                // 模拟初始化过程
                setTimeout(function() {
                    resolve({
                        dashboardContent: {
                            dashboard: {
                                worksheets: [{
                                    getSummaryDataAsync: function() {
                                        return Promise.resolve({
                                            data: [
                                                { value: 100 },
                                                { value: 200 },
                                                { value: 150 }
                                            ]
                                        });
                                    }
                                }]
                            }
                        }
                    });
                }, 1000);
            });
        }
    };
})(); 