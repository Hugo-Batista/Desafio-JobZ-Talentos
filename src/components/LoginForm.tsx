import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useBankStore } from '../stores/bankStore'
import { useNavigate } from 'react-router-dom'

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

type LoginFormData = z.infer<typeof loginSchema>

export function LoginForm() {
  const navigate = useNavigate()
  const login = useBankStore((state) => state.login)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormData) => {
    login(data.email, data.password)
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-bold text-slate-800">
          📧 Email
        </label>
        <input
          type="email"
          {...register('email')}
          placeholder="seu@email.com"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 hover:border-cyan-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/70"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-500 font-medium">❌ {errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-slate-800">
          🔐 Senha
        </label>
        <input
          type="password"
          {...register('password')}
          placeholder="••••••••"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 hover:border-cyan-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/70"
        />
        {errors.password && (
          <p className="mt-2 text-sm text-red-500 font-medium">❌ {errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-4 py-3 font-extrabold tracking-wide text-white shadow-[0_10px_30px_rgba(14,116,144,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(14,116,144,0.5)] active:translate-y-0"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        ✈️ Entrar
      </button>

      <div className="rounded-xl border border-slate-200 bg-slate-50/90 p-4 text-sm text-slate-700">
        <p className="mb-1 font-bold text-slate-900">🔒 Segurança de acesso</p>
        <p>Por segurança, credenciais nao sao exibidas na tela.</p>
      </div>
    </form>
  )
}
