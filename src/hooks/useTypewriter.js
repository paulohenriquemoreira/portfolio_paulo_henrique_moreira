import { useEffect, useState } from "react";

// Controla a animação de digitação e respeita a preferência de redução de movimento.
export function useTypewriter(
  text,
  speed = 90,
  startDelay = 250,
  disabled = false,
) {
  // Inicializa o texto completo quando a animação está desativada.
  const [value, setValue] = useState(
    disabled ? text : "",
  );

  useEffect(() => {
    // Exibe imediatamente o conteúdo completo quando a redução de movimento está ativa.
    if (disabled) {
      setValue(text);
      return undefined;
    }

    let currentIndex = 0;
    let intervalId;

    // Aguarda o tempo inicial antes de iniciar a digitação progressiva.
    const delayId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        currentIndex += 1;

        setValue(
          text.slice(0, currentIndex),
        );

        // Interrompe o intervalo depois que todo o texto é exibido.
        if (currentIndex >= text.length) {
          window.clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    // Remove os temporizadores quando o hook é desmontado ou recebe novos parâmetros.
    return () => {
      window.clearTimeout(delayId);
      window.clearInterval(intervalId);
    };
  }, [
    text,
    speed,
    startDelay,
    disabled,
  ]);

  return value;
}