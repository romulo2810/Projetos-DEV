function calculateWorkdays() {
    // Obtém as datas de início e fim dos campos de entrada
    const startDateInput = document.getElementById('start-date').value;
    const endDateInput = document.getElementById('end-date').value;

    // Verifica se ambas as datas foram preenchidas
    if (!startDateInput || !endDateInput) {
        alert("Por favor, preencha as duas datas!");
        return;
    }

    // Converte as datas de entrada em objetos Date
    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    // Verifica se a data de início é posterior à data de fim
    if (startDate > endDate) {
        alert("A data de início deve ser anterior ou igual à data de fim.");
        return;
    }

    // Lista de feriados 
    const holidays = [
        '2024-01-01', // Ano Novo
        '2024-02-12', // Carnaval
        '2024-02-13', // Carnaval
        '2024-04-07', // Sexta-feira Santa
        '2024-04-21', // Tiradentes
        '2024-05-01', // Dia do Trabalho
        '2024-09-07', // Independência do Brasil
        '2024-10-12', // Nossa Senhora Aparecida
        '2024-11-02', // Finados
        '2024-11-15', // Proclamação da República
        '2024-12-25', // Natal
    ];

    // Função para verificar se uma data é feriado
    function isHoliday(date) {
        const formattedDate = date.toISOString().split('T')[0]; // Formata para Y-M-D
        return holidays.includes(formattedDate);
    }

    let workdaysCount = 0; // Contador de dias úteis
    let currentDate = new Date(startDate); // Inicializa na data de início

    // Loop para contar os dias úteis
    while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6 && !isHoliday(currentDate)) { 
            // Se não for sábado, domingo ou feriado
            workdaysCount++;
        }
        currentDate.setDate(currentDate.getDate() + 1); // Avança para o próximo dia
    }

    // Exibe o número de dias úteis
    document.getElementById('result').textContent = `Dias úteis: ${workdaysCount}`;
}
