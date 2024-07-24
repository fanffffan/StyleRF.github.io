document.getElementById('downloadButton').addEventListener('click', function() {
    fetch('https://127.0.0.1:5000/download_logs')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应失败');
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'log_style.tar.gz';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('错误:', error));
});