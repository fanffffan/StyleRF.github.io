document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // 阻止默认表单提交

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('https://192.168.1.8:5000/uploadStyle', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            location.href = './step4开始训练.html';
        } else {
            const errorData = await response.json();
            alert('上传失败: ' + errorData.error);
        }
    } catch (error) {
        alert('上传过程中发生错误: ' + error.message);
    }
});