const logDiv = document.getElementById('log');

document.getElementById('processButton').addEventListener('click', async function() {
    try {
        const response = await fetch('http://192.168.1.8:5000/dealwith', {
            method: 'GET'
        });

        if (response.ok) {
            location.href = './step3上传风格图.html';
        } else {
            const errorData = await response.json();
            alert('数据预处理失败: ' + errorData.error);
        }
    } catch (error) {
        alert('数据预处理中发生错误: ' + error.message);
    }
});