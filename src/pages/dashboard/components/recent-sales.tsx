import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentSales() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>28</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>March 5 - April 11</p>
          <p className='text-sm text-muted-foreground'>
            Distribution #28
          </p>
        </div>
        <div className='ml-auto font-medium'>+$1.40 per OT</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>27</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Feb 7 - March 5</p>
          <p className='text-sm text-muted-foreground'>Distribution #27</p>
        </div>
        <div className='ml-auto font-medium'>+$2.83 per OT</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>26</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Jan 2 - Feb 7</p>
          <p className='text-sm text-muted-foreground'>
            Distribution #26
          </p>
        </div>
        <div className='ml-auto font-medium'>+$0.85 per OT</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>25</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Nov 14 - Jan 2</p>
          <p className='text-sm text-muted-foreground'>Distribution #25</p>
        </div>
        <div className='ml-auto font-medium'>+$5.45 per OT</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/05.png' alt='Avatar' />
          <AvatarFallback>24</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Oct 30 - Nov 14</p>
          <p className='text-sm text-muted-foreground'>Distribution #24</p>
        </div>
        <div className='ml-auto font-medium'>+$0.94 per OT</div>
      </div>
    </div>
  )
}
