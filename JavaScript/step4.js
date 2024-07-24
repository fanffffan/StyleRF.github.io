document.getElementById('trainButton').addEventListener('click', async function() {
    try {
        const response = await fetch('https://192.168.1.8:5000/run_train_script', {
            method: 'POST'
        });

        if (response.ok) {
            location.href = './step5渲染结果.html';
        } else {
            const errorData = await response.json();
            alert('训练脚本执行失败: ' + errorData.error);
        }
    } catch (error) {
        alert('训练脚本执行过程中发生错误: ' + error.message);
    }
});