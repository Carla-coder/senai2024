create view vw_funcionario as
select f.*,t.numero as telefone
from funcionario f left join telefone t
on f.matricula = t.matricula;

create view vw_manutencao as
select m.*, f.nome, v.modelo
from manutencao m left join funcionario f
on m.matricula = f.matricula
left join veiculo v
on m.placa = v.placa;
 